const Storage = {
  readWrite(key, data) {
    if (data) {
      const serializedData = JSON.stringify(data);
      localStorage[key] = serializedData;
    } else {
      const serializedData = localStorage[key];
      try {
        let savedState = JSON.parse(serializedData);
        return savedState;
      } catch(err) {
        return null;
      }
    }
  }
}

export default Storage;
