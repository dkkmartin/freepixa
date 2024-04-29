<script lang="ts">
	import Header from '$lib/components/header/header.svelte';
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Jersey+25&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<ModeWatcher />
<nav>
	<Header></Header>
</nav>
<slot></slot>
