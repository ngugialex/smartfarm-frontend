exports.getCropRecommendations = async (req, res) => {
  const { location } = req.query;

  try {
    const recommendations = [
      { crop: 'Wheat', suitability: 'High' },
      { crop: 'Corn', suitability: 'Medium' },
    ];
    res.json(recommendations);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
