<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index';
	import { Badge } from '$lib/components/ui/badge/';
	import { Button } from '$lib/components/ui/button/';
	import { Image } from '@unpic/svelte';
	import { imageDataStore } from '$lib/stores/stores';
	import Location from '$lib/components/svg/MaterialSymbolsLocationOn.svelte';
	import Calendar from '$lib/components/svg/MaterialSymbolsLightCalendarTodayOutline.svelte';
	import { type Result } from '$lib/types/unsplash';

	let data: Result;

	$: {
		data = $imageDataStore as Result;
		console.log(data);
	}

	function formatDate(dateString: string) {
		const date = new Date(dateString);
		return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
	}
</script>

<article class="flex flex-col gap-4 py-4">
	<header class="flex flex-col gap-2">
		<div class="flex items-center justify-between px-2">
			<a
				href={data.user.links.html}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="User profile"
			>
				<div class="flex items-center gap-2">
					<Avatar.Root>
						<Avatar.Image src={data.user.profile_image.small} alt="User avatar"></Avatar.Image>
						<Avatar.Fallback>FP</Avatar.Fallback>
					</Avatar.Root>
					<b>{data.user.name}</b>
				</div>
			</a>
			{#if data.user.location}
				<div class="flex items-center gap-2">
					<Location></Location>
					<p class="text-sm text-muted-foreground">{data.user.location}</p>
				</div>
			{/if}
		</div>
		<Image layout="fullWidth" src={data.urls.small} alt={data.alt_description} />
		<div class="flex items-center justify-between px-2">
			<small class="text-sm font-medium leading-none">Likes: {data.likes}</small>
			<div class="flex items-center gap-2">
				<Calendar></Calendar>
				<p class="text-sm text-muted-foreground">{formatDate(data.created_at)}</p>
			</div>
		</div>
	</header>
</article>

<section class="flex justify-between p-2">
	<div class="flex flex-wrap gap-2">
		{#each data.tags as tag}
			<a href={'/search/' + tag.title}>
				<Badge>{tag.title}</Badge>
			</a>
		{/each}
	</div>
	<a target="_blank" rel="noopener noreferrer" aria-label="Download" href={data.urls.full}
		><Button>Download</Button></a
	>
</section>
