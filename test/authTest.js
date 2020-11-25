const chai = require("chai")
const chaiHttp = require("chai-http")
const expect = chai.expect
const assert = require('assert');
chai.use(chaiHttp);


const app = require('../server');

// describe('auth api/1/signin', function() {
//     this.timeout(100000);
//     it('Should return username and JWT token',  function(done) {
//         chai
//             .request(app)
//             .post('/api/1/signin')
//             .send({username: 'john', password: 'password123'})
//             .end(function (err, res) {
//                 expect(res).to.be.json;
//                 expect(res.status).to.equal(200);
//                 expect(res.body).to.have.property('username');
//                 expect(res.body).to.have.property('accessToken');
//                 done();
//             })
//     });
// });

    describe('Array', function() {
      describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
          assert.equal([1, 2, 3].indexOf(4), -1);
        });
      });
    });
