export default async function handler(req, res) {
    if (req.method === 'POST') {
        const eventData = req.body;
        console.log("eBay Notification Data:", eventData);

        // You can store or process the eventData here

        res.status(200).json({ message: 'Notification received' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
