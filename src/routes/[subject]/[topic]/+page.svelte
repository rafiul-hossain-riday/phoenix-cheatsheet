<script>
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    const tempPageData = {
        sub: $page.params.subject,
        top: $page.params.topic,
    };

    let fetchPrefix =
        "https://raw.githubusercontent.com/Rafi-Riday/phoenix-cheatsheet/main/static";
    let mainData = null;

    // client side fetching
    const fetchData = async (subject, topic) => {
        try {
            const response = await fetch(
                `${fetchPrefix}/db/${subject}/${topic}.json`
            );
            mainData = await response.json();
        } catch (error) {
            mainData = 404;
            // Retry fetching after 1 second
            setTimeout(() => {
                fetchData($page.params.subject, $page.params.topic);
            }, 2000);
        }
    };
    // updating page
    onMount(() => {
        fetchData($page.params.subject, $page.params.topic);
    });
    $: if (
        tempPageData.top !== $page.params.topic ||
        tempPageData.sub !== $page.params.subject
    ) {
        tempPageData.top = $page.params.topic;
        tempPageData.sub = $page.params.subject;
        fetchData($page.params.subject, $page.params.topic);
    }

    // importing component conditionally
    const imports = {
        FormulaDoc: () => import("$lib/FormulaDoc/FormulaDoc.svelte"),
        SharedTwoDataObj: () =>
            import("$lib/SharedTwoDataObj/SharedTwoDataObj.svelte"),
        Quiz: () => import("$lib/Quiz/Quiz.svelte"),
        PageNotFound: () => import("$lib/PageNotFound.svelte"),
    };
</script>

<svelte:head>
    {#if mainData !== null && mainData !== 404}
        <title>{mainData.title.toUpperCase().split("-").join(" ")}</title>
        <meta name="description" content={mainData.description} />
        <meta name="keywords" content={mainData.keywords} />
        <meta name="author" content={mainData.author} />
    {/if}
</svelte:head>

{#if mainData === null}
    <center class="text-2xl flex flex-col justify-center items-center h-full">
        <progress class="progress progress-primary w-5/6" />
    </center>
{:else if mainData === 404}
    {#await imports["PageNotFound"]() then PageNotFound}
        <svelte:component this={PageNotFound.default} />
    {/await}
{:else if mainData}
    {#await imports[mainData.prototype]() then Prototype}
        <svelte:component this={Prototype.default} {mainData} />
    {/await}
{/if}
