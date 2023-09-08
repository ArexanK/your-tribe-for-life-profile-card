<script>
  /** @type {import("@prismicio/client").Content.HomeSlice} */
  export let slice;
  console.log(slice)
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
  
<img src= {slice.primary.image.url} alt="">
<p>{slice.primary.name}</p>
<p>{slice.primary.paragraph[0].text}</p>
<p>{slice.primary.link_github.url}</p>



</section>


