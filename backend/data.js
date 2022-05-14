import bcrypt from 'bcryptjs';

const data ={

    users:[
        {
            name: 'Chibuzor',
            email: 'admin@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name:  'John',
            email: 'user@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        },
    ],
    products: [
        {
            //_id: '1',
            name: 'Squat rack',
            slug: 'Squat-rack',
            categories: 'weightlighting',
            image: '/images/1.jpg',
            price: 230000,
            countInStock: 5,
            rating: 5,
            numReviews: 10,
            description: 'high quality squat rack',
        },
        {
            //_id: '2',
            name: 'Bench plus Squat rack',
            slug: 'Bench-plus-Squat-rack',
            categories: 'weightlighting',
            image: '/images/2.jpg',
            price: 315000,
            countInStock: 5,
            rating: 5,
            numReviews: 10,
            description: 'high quality squat rack plus bench',
        },
        {
            //_id: '3',
            name: 'Weightlifting Bench',
            slug: 'weightlifting-bench',
            categories: 'weightlighting',
            image: '/images/3.jpg',
            price: 150000,
            countInStock: 5,
            rating: 5,
            numReviews: 10,
            description: 'high quality weightlifting bench',
        },
        {
            //_id: '4',
            name: 'Situp bench',
            slug: 'Situp-bench',
            categories: 'Body weight',
            image: '/images/4.jpg',
            price: 30000,
            countInStock: 5,
            rating: 5,
            numReviews: 10,
            description: 'high quality situp bench',
        },
    ],
};

export default data;