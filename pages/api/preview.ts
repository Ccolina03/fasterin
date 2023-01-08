import type { NextApiRequest, NextApiResponse } from "next";

//alow to handle request, set a reponse
export default function preview(req: NextApiRequest, res: NextApiResponse) {
    res.setPreviewData({}); 
    res.writeHead(307, {Location: "/"}); //redirect user to homepage
    res.end();
}