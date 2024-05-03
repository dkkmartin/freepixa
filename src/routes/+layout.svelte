<script lang="ts">
	import Header from '$lib/components/header/header.svelte';
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';

	function handleOnLoad(node: HTMLLinkElement) {
		node.onload = function () {
			this.onload = null;
			// @ts-ignore
			this.removeAttribute('media');
		};
	}
</script>

<svelte:head>
	<title>FreePixa</title>
	<meta name="description" content="Search billions of images" />
	<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin="anonymous" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Jersey+25&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap"
		rel="stylesheet"
		media="print"
		use:handleOnLoad
		fetchpriority="high"
	/>
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
	<meta name="msapplication-TileColor" content="#da532c" />
	<meta name="theme-color" content="#ffffff" />
</svelte:head>

<ModeWatcher />
<nav>
	<Header></Header>
</nav>
<main>
	<slot></slot>
</main>
