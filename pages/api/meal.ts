import type { NextApiRequest, NextApiResponse } from 'next';

const mealList: Array<string> = [
    'Kartoffeln mit Quark',
    'Senfeier',
    'Spaghetti mit Tomatensauce',
    'Borschtsch',
    'Stulle',
    'Rührei'
];

function getRandomMeals( nom: number ): Array<string> {
    const numberOfAllMeals = mealList.length;
    const result: Array<string> = [];

    for( let i = 0; i < nom; i++ ) {
        result.push(
            mealList[Math.floor(Math.random() * numberOfAllMeals)]
        );
    }
    return result;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if( req.method === 'POST' ) {
        mealList.push(req.body as string);
        res.status(201).json(mealList);
        return;
    } else if( req.method === 'GET' ) {
        const { pageSize } = req.query;
        const mealsRequested = Number.parseInt(pageSize as string);
        res.status(200).json(getRandomMeals( mealsRequested ));
        return
    }
    res.status(404);
  }