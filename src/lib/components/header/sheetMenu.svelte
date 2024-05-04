<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet';
	import { Button } from '../ui/button';
	import Menu from '../svg/SolarHamburgerMenuOutline.svelte';
	import ThemeToggler from './themeToggler.svelte';
	import { Separator } from '../ui/separator';
	import Heart from '../svg/MaterialSymbolsFavoriteOutline.svelte';
	import { goto } from '$app/navigation';

	function handleClick() {
		goto('/favourites');
	}
</script>

<Sheet.Root>
	<Sheet.Trigger
		><Button aria-label="Menu" variant="outline" size="icon">
			<Menu class="size-5"></Menu>
		</Button></Sheet.Trigger
	>
	<Sheet.Content class="roboto-condensed flex flex-col gap-4">
		<Sheet.Header class="pb-4">
			<Sheet.Title>Menu</Sheet.Title>
			<Separator></Separator>
		</Sheet.Header>
		<ThemeToggler></ThemeToggler>
		<Sheet.Close>
			<Button on:click={() => handleClick()} class="flex w-full gap-2" variant="outline"
				>My favorites <Heart class="size-5"></Heart></Button
			>
		</Sheet.Close>
	</Sheet.Content>
</Sheet.Root>
