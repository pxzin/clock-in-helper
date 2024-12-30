<script lang="ts">
  import type { Snippet } from 'svelte';

  type Props = {
    children: Snippet;
    color?: 'primary' | 'secondary';
    variant?: 'default' | 'outline' | 'text';
    size?: 'default' | 'full';
    onclick?: () => void;
  };

  let {
    children,
    color = 'primary',
    variant = 'default',
    size = 'default',
    onclick,
  }: Props = $props();

  const btnClassBase = 'py-2 px-4 rd-lg cursor-pointer';

  const getColorClass = () => {
    return color === 'primary' ? 'hue-primary' : 'hue-secondary';
  };

  const getVariantClass = () => {
    const variantClasses = {
      default: 'bg-hue9 text-hue2 border-0 hover:bg-hue10',
      outline:
        'not-hover:bg-transparent bg-hue2 text-hue9 border-hue9 border-2',
      text: 'bg-transparent text-hue9 border-0 hover:bg-hue1',
    };

    return variantClasses[variant];
  };

  const getSizeClass = () => {
    return size === 'full' ? 'w-full' : '';
  };
</script>

<button
  class="{btnClassBase} {getColorClass()} {getVariantClass()} {getSizeClass()}"
  {onclick}
>
  {@render children()}
</button>
