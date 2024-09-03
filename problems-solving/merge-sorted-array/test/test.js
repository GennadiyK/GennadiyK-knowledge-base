const assert =  require('assert')
const merge = require('../index')


  describe('#merge()', function () {
    it('should return [1]', function () {
        const nums1 = [1]
        const nums2 = []
        const m = 1
        const n = 0
        const result = merge(nums1, m, nums2, n)  
        assert.deepEqual(result, [1])
    });
    it('should return [1]', function () {
        const nums1 = [0]
        const nums2 = [1]
        const m = 0
        const n = 1
        const result = merge(nums1, m, nums2, n)  
        assert.deepEqual(result, [1])
    });
    it('should return [1,2,2,3,5,6]', function () {
        const nums1 = [1,2,3,0,0,0]
        const nums2 = [2,5,6]
        const m = 3
        const n = 3
        const result = merge(nums1, m, nums2, n)  
        assert.deepEqual(result, [1,2,2,3,5,6])
    });
    it('should return [1,2,2,5,6]', function () {
      const nums1 = [1,2,0,0,0]
      const nums2 = [2,5,6]
      const m = 2
      const n = 3
      const result = merge(nums1, m, nums2, n)  
      assert.deepEqual(result, [1,2,2,5,6])
    });
  });
