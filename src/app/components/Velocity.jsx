import { VelocityScroll } from './ui/scrollbasedvelocity';

export default function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      className="px-6 py-2 text-center text-4xl bg-[#030C16] font-medium tracking-tight md:text-7xl md:leading-[5rem]"
      text="Create. Connect. Grow."
      default_velocity={5}
    />
  );
}
