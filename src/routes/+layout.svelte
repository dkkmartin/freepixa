<script lang="ts">
	import Header from '$lib/components/header/header.svelte';
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';
</script>

<svelte:head>
	<title>FreePixa</title>
	<meta name="description" content="Search billions of images" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
	<meta name="msapplication-TileColor" content="#da532c" />
	<meta name="theme-color" content="#ffffff" />
</svelte:head>

<ModeWatcher />
<div class="mx-auto max-w-md">
	<nav>
		<Header></Header>
	</nav>
	<main>
		<slot></slot>
	</main>
</div>
