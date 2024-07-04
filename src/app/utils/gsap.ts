import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

export * from 'gsap';
export * from 'gsap/ScrollTrigger';
export * from 'gsap/TextPlugin';
