<script>
  let { class: classProp, alt } = $props();
</script>

<span class={classProp}>{alt || ''}</span>
