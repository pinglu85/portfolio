<script>
	import profilePicture from './me.png';
	import DribbbleBrands from './DribbbleBrands.svelte';
	import GithubBrands from './GithubBrands.svelte';
</script>

<main>
	<div class="profileImage">
		<img src={profilePicture} alt="3D portrait of Ping Lu" />
	</div>

	<h1>Ping Lu</h1>
	<h4>Frontend Engineer</h4>
	<p>The website is currently under construction.</p>

	<div class="social-media-container">
		<a href="https://github.com/pinglu85">
			<GithubBrands />
		</a>
		<a href="https://dribbble.com/pinglu">
			<DribbbleBrands />
		</a>
	</div>
</main>

<style>
	main {
		min-height: 100vh;
		padding: 4rem 1rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		background: #f6f6f4;
	}

	.profileImage {
		position: relative;
		width: 200px;
		height: 200px;
		clip-path: circle(50%);
	}

	h1 {
		margin-top: 1rem;
		font-size: 2rem;
	}

	p {
		margin-top: 1rem;
	}

	h1,
	h4,
	p {
		text-align: center;
	}

	.social-media-container {
		display: flex;
		margin-top: 2rem;
		justify-content: center;
		align-items: center;
	}

	a {
		margin: 0 0.5rem;
		width: 24px;
	}
</style>
