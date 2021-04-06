const chai = require('chai'); 
const server = require('../app');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = server.createServer(8080);


describe("Resource route test", () => {
    it('should create new resource by name on the default route', async () => {
        const dataToPost = {testResourceField : "Value"}
        const resource = await chai.request(app).post('/api/resource').send(dataToPost);
    chai.expect(resource.body).to.deep.include(dataToPost);
    })
})

describe("Custom resource route test", () => {
    it('should create new resource by name on a custom route', async () => {
        const dataToPost = {testResourceField : "Value"}
        const resource = await chai.request(app).post('/api/resource/test').send(dataToPost);
    chai.expect(resource.body).to.deep.include(dataToPost);
    })
})

describe("Home assignment post flow test", () => {
    it('should create new resource by post and recieve by get the same object', async () => {
        const dataToPost = {testResourceField : "Value"}
        const dataToChange = {testResourceField : "newValue"}

        const resource = await chai.request(app).post('/api/resource').send(dataToPost);
        const entity = await chai.request(app).get('/api/resource');

        chai.expect(entity.body).to.deep.include(dataToPost);
    })
})

describe("Home assignment post with variable change flow test", () => {
    it('should create new resource by post and recieve by get the same object while being able to modify the object', async () => {
        const dataToPost = {testResourceField : "Value"}
        const dataToChange = {testResourceField : "newValue"}

        let resource = await chai.request(app).post('/api/resource').send(dataToPost);
        let entity = await chai.request(app).get('/api/resource');

        chai.expect(entity.body).to.deep.include(dataToPost);
        
        resource = await chai.request(app).post('/api/resource').send(dataToChange);
         entity = await chai.request(app).get('/api/resource');

        chai.expect(entity.body).to.deep.include(dataToChange);
    })
})