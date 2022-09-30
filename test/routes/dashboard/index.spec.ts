import request from "supertest";
import { expect } from "chai";

import createServer from "server";
const app = createServer();

describe("dashboard route", function() {
    it("/dashboard response with 200", function(done) {
        request(app).get("/dashboard").expect(200, done);
    });
});