<script>
    export let indexDB;
    const imports = {
        NavMenu: () => import("$lib/NavBar/NavMenu.svelte"),
    };
</script>

<div
    class="fixed top-0 left-0 z-50 navbar bg-primary text-primary-content shadow-lg"
>
    <div class="navbar-start">
        <div class="dropdown">
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    ><path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                    /></svg
                >
            </label>
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <ul
                tabindex="0"
                class="menu menu-compact dropdown-content mt-0 p-1 shadow-custom bg-primary text-primary-content rounded-box dropdown dropdown-bottom"
            >
                {#await imports["NavMenu"]() then NavMenu}
                    <svelte:component
                        this={NavMenu.default}
                        navData={indexDB}
                    />
                {/await}
            </ul>
        </div>
        <a href="/" class="btn btn-ghost normal-case text-xl">Phoenix</a>
    </div>
    <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
            {#await imports["NavMenu"]() then NavMenu}
                <svelte:component this={NavMenu.default} navData={indexDB} />
            {/await}
        </ul>
    </div>
    <div
        class="form-control navbar-end items-end children:w-full children:max-w-xs"
    >
        <input
            type="text"
            placeholder="Search in Website"
            class="input input-bordered text-base-content"
        />
    </div>
</div>
