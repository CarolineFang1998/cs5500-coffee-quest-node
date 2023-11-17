import yelp from 'yelp-fusion';

const apiKey = 'Iv_abp1th6eEephLxCam5MBUu124TXnN0TKd5uAxFSQe3WZtismnqAhRBnAzUBIK5XF3CJIw5NqOxag1XQp'
               + '7c0fepysR1f0Bdc8ggZa0M9jDyCRzGSjXLYWpUWQjZHYx';
// const apiKey = 'PJj8QhAyfQga0ptU85QeQypZJDK2j3kflSwy3rMLiK-k8P6VKe-_cBCvGwKPrYdDm9XT2tWzuGbtvmskd77' +
//     'Q63ro9JQ2-dhQrW5W8sZbYq25LBBZM0BpvxniQRk2ZHYx';
const client = yelp.client(apiKey);

function SearchDetailController(app) {
    // search by location and search context
    app.get('/api/search/:location/:param', (req, res) => {
        const location = req.params.location;
        const param = req.params.param;
        client.search({
                          term: param+'coffee',
                          location: location,
                          limit: '10',
                          categories: 'restaurants,bars',
                          open_now: true
                      }).then(response => {
            //console.log(JSON.stringify(response.jsonBody));
            res.send(response.jsonBody.businesses);
        }).catch(e => {
            console.log(e);
        });
    })

    // search by restaurant id
    app.get('/api/detail/:id', (req, res) => {
        const id = req.params.id;
        client.business(id).then(response => {
            // console.log(response.jsonBody.name);
            res.send(response.jsonBody);
        }).catch(e => {
            console.log(e);
        });
    })
}

export default SearchDetailController;