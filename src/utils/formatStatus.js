const statusColorMap = {
  available: '#4CAF50', // Green
  claimed: '#FFC107',   // Amber/Yellow
  pending: '#FF5722'    // Deep Orange
};

const getStatusColor = (status) => {
  return statusColorMap[status] || '#000000'
};

export default getStatusColor;