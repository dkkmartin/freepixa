<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index';
	import { Image } from '@unpic/svelte';
	import { imageDataStore } from '$lib/stores/stores';
	import MaterialSymbolsLocationOn from '$lib/components/svg/MaterialSymbolsLocationOn.svelte';
	import { type Result } from '$lib/types/unsplash';

	let data: Result;
	$: {
		data = $imageDataStore as Result;
		console.log(data);
	}
</script>

<section class="flex flex-col gap-4 py-4">
	<div class="flex flex-col gap-2">
		<div class="flex items-center justify-between px-2">
			<a href={data.user.links.html} target="_blank">
				<div class="flex items-center gap-2">
					<Avatar.Root>
						<Avatar.Image src={data.user.profile_image.small}></Avatar.Image>
						<Avatar.Fallback>FP</Avatar.Fallback>
					</Avatar.Root>
					<b>{data.user.name}</b>
				</div>
			</a>
			<div class="flex gap-2">
				<MaterialSymbolsLocationOn></MaterialSymbolsLocationOn>
				<p class="text-sm text-muted-foreground">{data.user.location}</p>
			</div>
		</div>
		<Image layout="fullWidth" src={data.urls.small} alt={data.alt_description} />
		<div class="px-2">
			<small class="text-sm font-medium leading-none">Likes: {data.likes}</small>
		</div>
	</div>
</section>
