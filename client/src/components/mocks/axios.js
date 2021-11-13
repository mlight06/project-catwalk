export default {
  get: jest.fn().mockImplementation((url) => {
    if (url === '/products/44388') {
      return Promise.resolve({
        data: {
          id: 44388,
          campus: 'hr-den',
          name: 'Camo Onesie',
          slogan: 'Blend in to your crowd',
          description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
          category: 'Jackets',
          default_price: '140.00',
          created_at: '2021-08-13T14:40:29.181Z',
          updated_at: '2021-08-13T14:40:29.181Z',
        },
      });
    }
    if (url === '/products/44388/styles') {
      return Promise.resolve({
        data: {
          // product_id: 44388,
          results: [
            {
              style_id: 266902,
              name: "Forest Green & Black",
              original_price: "140.00",
              sale_price: null,
              default?: true,
              photos: [
                {
                  "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                },
                {
                  "thumbnail_url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
                },
                {
                  "thumbnail_url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80"
                },
                {
                  "thumbnail_url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
                },
                {
                  "thumbnail_url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                },
                {
                  "thumbnail_url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                }
              ],
              "skus": {
                "1549611": {
                  "quantity": 8,
                  "size": "XS"
                },
                "1549612": {
                  "quantity": 16,
                  "size": "S"
                },
                "1549613": {
                  "quantity": 17,
                  "size": "M"
                },
                "1549614": {
                  "quantity": 10,
                  "size": "L"
                },
                "1549615": {
                  "quantity": 15,
                  "size": "XL"
                },
                "1549616": {
                  "quantity": 4,
                  "size": "XL"
                }
              }
            }
          ]
        }
      })
    }
});
