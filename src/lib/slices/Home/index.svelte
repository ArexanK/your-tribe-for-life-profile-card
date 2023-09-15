<script>
  /** @type {import("@prismicio/client").Content.HomeSlice} */
  export let slice;
  console.log(slice);
</script>

<body>
   
<section>
  <section
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
  >
    <img src={slice.primary.image.url} alt="" width="300" height="300" />
    <p>{slice.primary.name}</p>
    <p>{slice.primary.paragraph[0].text}</p>

    <!-- <p>{slice.primary.link_github.url}</p> -->

    <a href={slice.primary.link_github.url}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-brand-github"
        width="24"
        height="24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        ><path d="M0 0h24v24H0z" stroke="none" /><path
          d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"
        />
      </svg>
      Github
    </a>
  </section>
</section>
</body>
<style>

body{
  background-color: green;
}

  main {
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
  }

  section {
    width: 30em;
    height: fit-content;
    margin: auto;
    padding: 1em;
    background-color: #faf0e6;
    border-radius: 1em;
    opacity: 0;
    z-index: 1;
    animation: fade-in 0.9s 1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
  }

  @keyframes fade-in {
    0% {
      transform: translateY(1em);
      opacity: 0;
    }

    66% {
      transform: translateY(-0.33em);
    }

    100% {
      transform: translateY(0em);
      opacity: 1;
    }
  }

  p {
    max-width: 30em;
    margin-bottom: 1em;
  }

  img {
    width: 15em;
    height: auto;
    aspect-ratio: 1/1;
    border-radius: 0.5em;
  }

 
</style>
