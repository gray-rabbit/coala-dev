<script>
	let urls = [
		'https://picsum.photos/id/500/800/300',
		'https://picsum.photos/id/501/800/300',
		'https://picsum.photos/id/502/800/300',
		'https://picsum.photos/id/503/800/300'
	];
	let urlIdx = 0;
</script>

<div class="w-full carousel">
	<div id="slide1" class="relative w-full carousel-item">
		<img src={urls[Math.abs(urlIdx)]} class="w-full" alt="캐러셀" />
		<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
			<button
				class="btn btn-xs md:btn-md btn-circle"
				on:click={() => (urlIdx = (urlIdx - 1) % urls.length)}>❮</button
			>
			<button
				class="btn btn-xs md:btn-md btn-circle"
				on:click={() => (urlIdx = (urlIdx + 1) % urls.length)}>❯</button
			>
		</div>
		<p class="absolute top-[80%] left-[20%]">하하하</p>
	</div>
</div>
