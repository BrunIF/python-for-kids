// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
  site: 'https://brunif.github.io',
  base: '/python-for-kids',
  integrations: [
    mermaid(),
    starlight({
      title: 'Курс «Python для дітей»',
      description:
        'Практичний курс Python для Марка — від змінних до OOP, ігор та алгоритмів.',
      logo: {
        src: './src/assets/logo.svg',
      },
      editLink: {
        baseUrl: 'https://github.com/BrunIF/python-for-kids/edit/main',
      },
      social: [
        {
          label: 'GitHub',
          href: 'https://github.com/BrunIF/python-for-kids',
          icon: 'github',
        },
      ],
      lastUpdated: true,
      favicon: '/favicon.svg',
      sidebar: [
        {
          label: 'Вступ',
          items: [{ label: 'Про курс', slug: '' }],
        },
        {
          label: 'Основи Python',
          items: [
            { label: 'Урок 1', slug: 'lessons/01_zminni_ta_print' },
            { label: 'Урок 2', slug: 'lessons/02_typy_danyh_ta_matematyka' },
            { label: 'Урок 3', slug: 'lessons/03_input_ta_peretvorennya_typiv' },
            { label: 'Урок 4', slug: 'lessons/04_porivnyannya_ta_if' },
            { label: 'Урок 5', slug: 'lessons/05_elif_ta_logichni_operatory' },
          ],
        },
        {
          label: 'Цикли та структури',
          items: [
            { label: 'Урок 6', slug: 'lessons/06_cykl_for_ta_range' },
            { label: 'Урок 7', slug: 'lessons/07_cykl_while' },
            { label: 'Урок 8', slug: 'lessons/08_random_ta_gra_vgadai_chyslo' },
            { label: 'Урок 9', slug: 'lessons/09_riadky_ta_spysky' },
          ],
        },
        {
          label: 'Функції та дані',
          items: [
            { label: 'Урок 10', slug: 'lessons/10_funktsii' },
            { label: 'Урок 11', slug: 'lessons/11_slovnyky_dict' },
            { label: 'Урок 12', slug: 'lessons/12_vkladeni_struktury' },
          ],
        },
        {
          label: 'Файли, помилки, модулі',
          items: [
            { label: 'Урок 13', slug: 'lessons/13_faily_save_load' },
            { label: 'Урок 14', slug: 'lessons/14_try_except_ta_pomylky' },
            { label: 'Урок 15', slug: 'lessons/15_vlasni_moduli' },
          ],
        },
        {
          label: 'Графіка з Pygame',
          items: [
            { label: 'Урок 16', slug: 'lessons/16_pygame_vikno_game_loop' },
            { label: 'Урок 17', slug: 'lessons/17_pygame_koordynaty_ta_ruh' },
            { label: 'Урок 18', slug: 'lessons/18_pygame_klaviatura' },
            { label: 'Урок 19', slug: 'lessons/19_pygame_rect_collision' },
          ],
        },
        {
          label: 'Boss Project — Catch the Coin',
          items: [{ label: 'Урок 20', slug: 'lessons/20_proekt_catch_the_coin' }],
        },
        {
          label: 'OOP — класи та об\'єкти',
          items: [
            { label: 'Урок 21', slug: 'lessons/21_lesson_21' },
            { label: 'Урок 22', slug: 'lessons/22_lesson_22' },
            { label: 'Урок 23', slug: 'lessons/23_lesson_23' },
            { label: 'Урок 24', slug: 'lessons/24_lesson_24' },
            { label: 'Урок 25', slug: 'lessons/25_lesson_25' },
          ],
        },
        {
          label: 'Composition та наслідування',
          items: [
            { label: 'Урок 26', slug: 'lessons/26_lesson_26' },
            { label: 'Урок 27', slug: 'lessons/27_lesson_27' },
            { label: 'Урок 28', slug: 'lessons/28_lesson_28' },
            { label: 'Урок 29', slug: 'lessons/29_lesson_29' },
          ],
        },
        {
          label: 'Boss Project — OOP Arena',
          items: [{ label: 'Урок 30', slug: 'lessons/30_lesson_30' }],
        },
        {
          label: 'Space Invaders',
          items: [
            { label: 'Урок 31', slug: 'lessons/31_lesson_31' },
            { label: 'Урок 32', slug: 'lessons/32_lesson_32' },
            { label: 'Урок 33', slug: 'lessons/33_lesson_33' },
            { label: 'Урок 34', slug: 'lessons/34_lesson_34' },
            { label: 'Урок 35', slug: 'lessons/35_lesson_35' },
            { label: 'Урок 36', slug: 'lessons/36_lesson_36' },
            { label: 'Урок 37', slug: 'lessons/37_lesson_37' },
            { label: 'Урок 38', slug: 'lessons/38_lesson_38' },
            { label: 'Урок 39', slug: 'lessons/39_lesson_39' },
          ],
        },
        {
          label: 'Boss Project — Space Invaders 1.0',
          items: [{ label: 'Урок 40', slug: 'lessons/40_lesson_40' }],
        },
        {
          label: 'Алгоритми та структури даних',
          items: [
            { label: 'Урок 41', slug: 'lessons/41_lesson_41' },
            { label: 'Урок 42', slug: 'lessons/42_lesson_42' },
            { label: 'Урок 43', slug: 'lessons/43_lesson_43' },
            { label: 'Урок 44', slug: 'lessons/44_lesson_44' },
            { label: 'Урок 45', slug: 'lessons/45_lesson_45' },
            { label: 'Урок 46', slug: 'lessons/46_lesson_46' },
            { label: 'Урок 47', slug: 'lessons/47_lesson_47' },
            { label: 'Урок 48', slug: 'lessons/48_lesson_48' },
            { label: 'Урок 49', slug: 'lessons/49_lesson_49' },
          ],
        },
        {
          label: 'Final Boss — Python Challenge 50',
          items: [{ label: 'Урок 50', slug: 'lessons/50_lesson_50' }],
        },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});