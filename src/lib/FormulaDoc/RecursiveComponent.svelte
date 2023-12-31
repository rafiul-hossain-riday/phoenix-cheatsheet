<script>
    import { getContext } from "svelte";
    const { marked, Katexify } = getContext("md+k");
    const { addCrossOrigin, splitMdKatex, upperCaseWord, range } =
        getContext("utilities");
    export let dataSet;
    export let titleSize = 3;
    let titleSizeArray = ["text-xl", "text-lg", "text-base"];
</script>

{#each dataSet as { title, img, collapse, serial, noBadge, dataSet }, idx (idx)}
    <section class={collapse ? "collapse collapse-arrow grow" : ""}>
        <!-- collapse inp -->
        {#if collapse}
            <input type="checkbox" class="peer min-h-0" />
        {/if}
        <!-- title -->
        {#if title || collapse}
            <h2
                class="font-medium {titleSize <= titleSizeArray?.length - 1
                    ? titleSizeArray[titleSize]
                    : 'base'} {collapse
                    ? 'collapse-title p-0 min-h-0 border-b-2 peer-checked:mb-2'
                    : ''}"
            >
                {#if title}
                    {@html upperCaseWord(title)}
                {:else if collapse}
                    <span class="text-neutral font-mono">Expand</span>
                {/if}
                {#if noBadge !== true}
                    <div class="badge badge-xs py-2 -translate-y-[2px]">
                        {img || dataSet
                            ? (img && img.len?.length === 2
                                  ? img.len[1] +
                                    1 -
                                    img.len[0] -
                                    (img.avoid ? img.avoid : []).length
                                  : 0) + (dataSet ? dataSet.length : 0)
                            : 0}
                    </div>
                {/if}
            </h2>
        {/if}
        <!-- body -->
        <div
            class="flex flex-col gap-2 {collapse
                ? 'collapse-content'
                : title
                ? 'px-4 mt-2'
                : 'px-4 -mt-2'}"
            style="padding-bottom: 0 !important;"
        >
            <!-- img body -->
            {#if img && img.display === "formula"}
                <center>
                    <section
                        class="mb-6 flex flex-col items-center"
                        style="max-width:{img.width}; gap: {img.gap};"
                    >
                        {#each range(img.len[0], img.len[1] + 1).filter((a) => !(img.avoid ? img.avoid : []).includes(a)) as l, idx (idx)}
                            <div>
                                {#if serial}
                                    <span
                                        class="font-bold badge badge-xs py-2 px-3 mb-1"
                                        >{idx + 1}</span
                                    >
                                {/if}
                                <img
                                    class="w-full shadow-lg"
                                    src="{img.before}{l}{img.after}"
                                    alt="{l}{img.after}"
                                    crossorigin="anonymous"
                                />
                            </div>
                        {/each}
                    </section>
                </center>
            {/if}
            <!-- string body -->
            {#if dataSet}
                {#each dataSet as formula, idxFormula (idxFormula)}
                    <div class="flex flex-row justify-start items-start">
                        {#if serial}
                            <span class="font-semibold"
                                >{(img &&
                                img.display === "formula" &&
                                img.len?.length === 2
                                    ? img.len[1] +
                                      1 -
                                      img.len[0] -
                                      (img.avoid ? img.avoid : []).length
                                    : 0) +
                                    idxFormula +
                                    1}.&nbsp;</span
                            >
                        {/if}
                        <div use:addCrossOrigin class="grow">
                            {#if typeof formula === "string"}
                                {#each splitMdKatex(formula) as part, idx (idx)}
                                    {#if part.md}
                                        {@html marked.parseInline(part.md)}
                                    {:else if part.k}
                                        {@html Katexify(part.k)}
                                    {/if}
                                {/each}
                            {:else if typeof formula === "object" && !Array.isArray(formula)}
                                <svelte:self
                                    dataSet={[formula]}
                                    titleSize={titleSize + 1}
                                />
                            {/if}
                        </div>
                    </div>
                {/each}
            {/if}
        </div>
    </section>
{/each}

<style>
    .collapse-title::after {
        transform: translate(0, -8px) rotate(45deg);
    }
</style>
