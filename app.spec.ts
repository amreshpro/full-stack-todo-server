/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */

import { calculateDiscount } from './src/Discount';
import { describe, it } from '@jest/globals';
import app from './src/app';
import request from 'supertest';

describe('App', () => {
    it('it should calculate discount', () => {
        const result = calculateDiscount(100, 10);
        expect(result).toBe(10);
    });

    it('test 2', () => {
        const result2 = calculateDiscount(100, 60);
        expect(result2).toBe(60);
    });

    it('test the request', async () => {
        const response = await request(app).get('/').send();
        expect(response.statusCode).toBe(200);
    });
});
