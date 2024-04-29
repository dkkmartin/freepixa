<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Search from '../svg/search.svelte';
	import { Button } from '../ui/button';
	import ThemeToggler from './themeToggler.svelte';
	import { animate } from 'motion';

	let clicked: boolean = false;
	let inputElement: HTMLElement;
	let searchTerm: string;

	const focusSearch = async () => {
		await new Promise((res) => setTimeout(res, 500));
		inputElement?.focus();
	};

	const handleSearch = (e: Event) => {
		e.preventDefault();
		goto('/search/' + searchTerm);
	};

	const searchAnimationOpen = () => {
		animate('.search-button', { width: '180px' }, { easing: 'ease-in-out', duration: 0.5 });
		animate('#search-input', { opacity: [0, 1] }, { delay: 0.4 });
	};

	const searchAnimationClose = () => {
		animate('.search-button', { width: '2.25rem' }, { easing: 'ease-in-out', duration: 0.5 });
	};

	onMount(() => {
		inputElement?.focus();
	});
</script>

<header class="flex items-center justify-between border-b p-2 shadow-sm">
	<h1 class="heading-title text-5xl">FreePixa</h1>
	<div class="flex items-center gap-3">
		<div class="search-button flex h-9 w-9 items-center rounded-[calc(var(--radius)-2px)] border">
			<Button
				variant="ghost"
				size="icon"
				class="relative -top-[1px] min-w-9"
				on:click={async () => {
					if (!clicked) {
						searchAnimationOpen();
						clicked = true;
						focusSearch();
					} else {
						searchAnimationClose();
						clicked = false;
					}
				}}
			>
				<Search class="size-5"></Search>
			</Button>
			<form on:submit={handleSearch}>
				<input
					id="search-input"
					bind:this={inputElement}
					bind:value={searchTerm}
					type="search"
					placeholder="Search"
					class="border-none {clicked ? '' : 'hidden'}"
				/>
			</form>
		</div>
		<ThemeToggler></ThemeToggler>
	</div>
</header>

<style>
	.heading-title {
		font-family: 'Jersey 25', sans-serif;
	}

	.hidden {
		display: none;
	}

	input {
		border: none;
		background-color: initial;
		outline: none;
		max-width: 135px;
	}
</style>
