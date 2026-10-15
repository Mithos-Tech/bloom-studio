import { describe, expect, test } from 'bun:test';
import { cloudinarySrcSet } from './cloudinary';

describe('Cloudinary responsive delivery', () => {
  test('keeps format, quality and asset identity while generating smaller sizes', () => {
    expect(cloudinarySrcSet('https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_1600,c_limit/v1/photo.webp', [480, 960])).toBe(
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_480,c_limit/v1/photo.webp 480w, https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_960,c_limit/v1/photo.webp 960w'
    );
  });
});