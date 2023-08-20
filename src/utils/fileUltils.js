export const fileToBase64 = async (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  })
  
  export const base64ToFile = async (base64, fileName) => {
    const result = fetch(base64)
      .then(res => res.blob())
      .then(blob => {
        const file = new File([blob], fileName)
  
        return file
      })
  
    return result
  }