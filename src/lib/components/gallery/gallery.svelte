<script lang="ts">
	import Autoscroll from 'embla-carousel-auto-scroll';
	import * as Carousel from '$lib/components/ui/carousel/index';

	const opts = { dragFree: true, loop: true };

	const plugin1 = Autoscroll({ speed: 0.5, stopOnInteraction: false, stopOnMouseEnter: true });
	const plugin2 = Autoscroll({ speed: 0.5, stopOnInteraction: false, stopOnMouseEnter: true });
	const plugin3 = Autoscroll({ speed: 0.5, stopOnInteraction: false, stopOnMouseEnter: true });
</script>

<div class="flex flex-col gap-4 pt-4">
	<div>
		<h1 class="roboto-condensed pl-2 text-sm">Nature</h1>
		<Carousel.Root class="border-b border-t p-2" plugins={[plugin1]} {opts}>
			<Carousel.Content>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/nature/aedrian-14oi_X1IHPk-unsplash.jpg?format=webp&effort=3"
						alt="Nature"
					></enhanced:img></Carousel.Item
				>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/nature/brad-fickeisen-nhp90LhwkiI-unsplash.jpg?format=webp&effort=3"
						alt="Nature"
					></enhanced:img></Carousel.Item
				>
				<Carousel.Item class="carousel-item basis-1/3">
					<enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/nature/bro-takes-photos-ae06kmxEswU-unsplash.jpg?format=webp&effort=3"
						alt="Nature"
					></enhanced:img>
				</Carousel.Item>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/nature/bro-takes-photos-oHbf6jP_5hg-unsplash.jpg?format=webp&effort=3"
						alt="Nature"
					></enhanced:img></Carousel.Item
				>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/nature/dima-dallacqua-U8TAGVPFJc4-unsplash.jpg?format=webp&effort=3"
						alt="Nature"
					></enhanced:img></Carousel.Item
				>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/nature/domina-petric-VyFSviDXsGM-unsplash.jpg?format=webp&effort=3"
						alt="Nature"
					></enhanced:img></Carousel.Item
				>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/nature/hanvin-cheong-QKRdStaALcA-unsplash.jpg?format=webp&effort=3"
						alt="Nature"
					></enhanced:img></Carousel.Item
				>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/nature/jen-milius-l8sGpcjgg48-unsplash.jpg?format=webp&effort=3"
						alt="Nature"
					></enhanced:img></Carousel.Item
				>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/nature/jordi-rubies-1YxzmXvcSt0-unsplash.jpg?format=webp&effort=3"
						alt="Nature"
					></enhanced:img></Carousel.Item
				>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/nature/mike-hindle-zggCjn5UWKQ-unsplash.jpg?format=webp&effort=3"
						alt="Nature"
					></enhanced:img></Carousel.Item
				>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/nature/nikita-pishchugin-JSFOQyTrUqA-unsplash.jpg?format=webp&effort=3"
						alt="Nature"
					></enhanced:img></Carousel.Item
				>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/nature/oscar-mcglone-OzZ2g2nKNUk-unsplash.jpg?format=webp&effort=3"
						alt="Nature"
					></enhanced:img></Carousel.Item
				>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/nature/peng-chen-qd-dvtbS45Q-unsplash.jpg?format=webp&effort=3"
						alt="Nature"
					></enhanced:img></Carousel.Item
				>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/nature/pete-alexopoulos-2XIVx8n-R-Y-unsplash.jpg?format=webp&effort=3"
						alt="Nature"
					></enhanced:img></Carousel.Item
				>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/nature/ran-liwen-Z9kT2bwgkjA-unsplash.jpg?format=webp&effort=3"
						alt="Nature"
					></enhanced:img></Carousel.Item
				>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/nature/soekarno-omar-iCf7P1AAbMY-unsplash.jpg?format=webp&effort=3"
						alt="Nature"
					></enhanced:img></Carousel.Item
				>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/nature/ussama-azam-lmiJDdmUOJQ-unsplash.jpg?format=webp&effort=3"
						alt="Nature"
					></enhanced:img></Carousel.Item
				>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/nature/william-warby-BLnwfr90Cm4-unsplash.jpg?format=webp&effort=3"
						alt="Nature"
					></enhanced:img></Carousel.Item
				>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/nature/william-warby-mgr7Cx1WtCA-unsplash.jpg?format=webp&effort=3"
						alt="Nature"
					></enhanced:img></Carousel.Item
				>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/nature/william-warby-N2XQL-_-9Aw-unsplash.jpg?format=webp&effort=3"
						alt="Nature"
					></enhanced:img></Carousel.Item
				>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/nature/wolfgang-hasselmann-MUZFyoRjpe4-unsplash.jpg?format=webp&effort=3"
						alt="Nature"
					></enhanced:img></Carousel.Item
				>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/nature/wolfgang-hasselmann-ycFt0l6-AjY-unsplash.jpg?format=webp&effort=3"
						alt="Nature"
					></enhanced:img></Carousel.Item
				>
			</Carousel.Content>
		</Carousel.Root>
	</div>

	<div>
		<h2 class="roboto-condensed pl-2 text-sm">Beach</h2>
		<Carousel.Root
			class="border-b border-t p-2"
			plugins={[plugin2]}
			opts={{ ...opts }}
			orientation="vertical"
		>
			<Carousel.Content class="h-[240px]">
				<Carousel.Item
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/beach/david-becker-DS0PdFlYVOg-unsplash.jpg?format=webp&effort=3"
						alt="Beach"
					/></Carousel.Item
				>
				<Carousel.Item>
					<enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/beach/david-becker-MymPtmr8Y5k-unsplash.jpg?format=webp&effort=3"
						alt="Beach"
					/></Carousel.Item
				>
				<Carousel.Item>
					<enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/beach/dominik-puskas-VtDWq4L04wA-unsplash.jpg?format=webp&effort=3"
						alt="Beach"
					/></Carousel.Item
				>
				<Carousel.Item>
					<enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/beach/haotian-zheng-t4wqd8_lz9w-unsplash.jpg?format=webp&effort=3"
						alt="Beach"
					/></Carousel.Item
				>
				<Carousel.Item
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/beach/jordi-rubies-ZpuDORzU-FA-unsplash.jpg?format=webp&effort=3"
						alt="Beach"
					/></Carousel.Item
				>
				<Carousel.Item
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/beach/mathias-reding-Ygo_IL62BjQ-unsplash.jpg?format=webp&effort=3"
						alt="Beach"
					/></Carousel.Item
				>
				<Carousel.Item
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/beach/miguel-lindo-FVGHKc1imQM-unsplash.jpg?format=webp&effort=3"
						alt="Beach"
					/></Carousel.Item
				>
				<Carousel.Item
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/beach/natalia-malaia-EAsXgU64Uzs-unsplash.jpg?format=webp&effort=3"
						alt="Beach"
					/></Carousel.Item
				>
				<Carousel.Item>
					<enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/beach/reinaldo-photography-yNt15eG8eRg-unsplash.jpg?format=webp&effort=3"
						alt="Beach"
					/></Carousel.Item
				>
			</Carousel.Content>
		</Carousel.Root>
	</div>

	<div>
		<h1 class="roboto-condensed pl-2 text-sm">Animals</h1>
		<Carousel.Root
			dir="rtl"
			class="border-b border-t p-2"
			plugins={[plugin3]}
			opts={{ ...opts, direction: 'rtl' }}
		>
			<Carousel.Content>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/animals/javier-patino-loira-nortqDjv7ak-unsplash.jpg?format=webp&effort=3"
						alt="Animal"
					></enhanced:img></Carousel.Item
				>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/animals/bob-brewer-nuxaJxtDtQE-unsplash.jpg?format=webp&effort=3"
						alt="Animal"
					></enhanced:img>
				</Carousel.Item>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/animals/adam-berkecz-K6kZKJOmZrk-unsplash.jpg?format=webp&effort=3"
						alt="Animal"
					></enhanced:img></Carousel.Item
				>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/animals/andrew-pons-lylCw4zcA7I-unsplash.jpg?format=webp&effort=3"
						alt="Animal"
					></enhanced:img></Carousel.Item
				>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/animals/boris-smokrovic-lyvCvA8sKGc-unsplash.jpg?format=webp&effort=3"
						alt="Animal"
					></enhanced:img></Carousel.Item
				>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/animals/charlesdeluvio-Mv9hjnEUHR4-unsplash.jpg?format=webp&effort=3"
						alt="Animal"
					></enhanced:img></Carousel.Item
				>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/animals/dan-dennis-OaU35oEP9_E-unsplash.jpg?format=webp&effort=3"
						alt="Animal"
					></enhanced:img></Carousel.Item
				>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/animals/donnie-ray-crisp-66zrT0dJ7Mc-unsplash.jpg?format=webp&effort=3"
						alt="Animal"
					></enhanced:img></Carousel.Item
				>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/animals/geronimo-giqueaux-pr1M1Y7zdik-unsplash.jpg?format=webp&effort=3"
						alt="Animal"
					></enhanced:img></Carousel.Item
				>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/animals/joshua-j-cotten-f1zyI7eL_WU-unsplash.jpg?format=webp&effort=3"
						alt="Animal"
					></enhanced:img></Carousel.Item
				>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/animals/kar-ming-moo-Q_3WmguWgYg-unsplash.jpg?format=webp&effort=3"
						alt="Animal"
					></enhanced:img></Carousel.Item
				>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/animals/keith-markilie-jBjQA3LU9Dc-unsplash.jpg?format=webp&effort=3"
						alt="Animal"
					></enhanced:img></Carousel.Item
				>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/animals/marek-szturc-CM1oVEUzsNM-unsplash.jpg?format=webp&effort=3"
						alt="Animal"
					></enhanced:img></Carousel.Item
				>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/animals/philipp-pilz-iQRKBNKyRpo-unsplash.jpg?format=webp&effort=3"
						alt="Animal"
					></enhanced:img></Carousel.Item
				>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/animals/ray-hennessy-mpw37yXc_WQ-unsplash.jpg?format=webp&effort=3"
						alt="Animal"
					></enhanced:img></Carousel.Item
				>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/animals/sian-cooper-NEJcmvLFcws-unsplash.jpg?format=webp&effort=3"
						alt="Animal"
					></enhanced:img></Carousel.Item
				>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/animals/stephanie-leblanc-SVwOposMxHY-unsplash.jpg?format=webp&effort=3"
						alt="Animal"
					></enhanced:img></Carousel.Item
				>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/animals/usgs-KAsF7SBCmpk-unsplash.jpg?format=webp&effort=3"
						alt="Animal"
					></enhanced:img></Carousel.Item
				>
				<Carousel.Item class="carousel-item basis-1/3"
					><enhanced:img
						loading="lazy"
						src="$lib/images/frontpage/animals/zhengtao-tang-V7SKRhXskv8-unsplash.jpg?format=webp&effort=3"
						alt="Animal"
					></enhanced:img></Carousel.Item
				>
			</Carousel.Content>
		</Carousel.Root>
	</div>
</div>

<style>
	.roboto-condensed {
		font-family: 'Roboto Condensed', sans-serif;
		font-optical-sizing: auto;
		font-weight: bold;
		font-style: normal;
	}

	img:hover {
		transform: scale(1.1);
	}

	img {
		transition: transform 0.3s ease-in-out;
		height: 220px;
		object-fit: cover;
		cursor: pointer;
	}
</style>
