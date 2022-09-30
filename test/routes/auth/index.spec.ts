import request from "supertest";
import { expect } from "chai";

import createServer from "server";
const app = createServer();

describe("auth route", function() {
    it("/auth response with 200", function(done) {
        request(app).get("/auth").expect(200, done);
    });
});