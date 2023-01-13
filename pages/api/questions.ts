import type { NextApiRequest, NextApiResponse } from 'next';

const shuffle = ([...arr]) => {
    let m = arr.length;
    while (m) {
        const i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
};

const getQuestions = async () => {
    const sheetId = process.env.SHEET_ID;
    const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
    const sheetName = 'question';
    const query = encodeURIComponent('Select *');
    const url = `${base}&sheet=${sheetName}&tq=${query}`;

    const response = await fetch(url);
    const resource = await response.text();

    //Remove additional text and extract only JSON:
    const jsonData = JSON.parse(resource.substring(47).slice(0, -2));

    //Extract column labels
    const heading: string[] = jsonData.table.cols.reduce((acc: string[], heading: { label: string }) => {
        if (heading.label) {
            acc.push(heading.label);
            return acc;
        }
    }, []);

    //extract row data
    return jsonData.table.rows.reduce((acc: object[], rowData: any) => {
        const row = {} as any;
        heading.forEach((label, index) => (row[label] = rowData.c[index].v));
        acc.push(row);
        return acc;
    }, []);
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    try {
        const questions = await getQuestions();
        res.status(200).json(shuffle(questions));
    } catch (error) {
        res.status(500).json({ error: 'Error load questions' });
    }
}
