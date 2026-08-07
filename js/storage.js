const FishingDB = (() => {
  const DB_NAME = 'FishingOSDB';
  const DB_VERSION = 2;
  const STORES = ['waters', 'spots', 'catches', 'diary', 'settings'];
  let db;

  function open() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);
      request.onupgradeneeded = event => {
        const database = event.target.result;
        STORES.forEach(name => {
          if (!database.objectStoreNames.contains(name)) {
            database.createObjectStore(name, { keyPath: 'id' });
          }
        });
      };
      request.onsuccess = () => { db = request.result; resolve(db); };
      request.onerror = () => reject(request.error);
    });
  }

  async function ensure() { if (!db) await open(); }
  async function getAll(store) {
    await ensure();
    return new Promise((resolve, reject) => {
      const req = db.transaction(store, 'readonly').objectStore(store).getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    });
  }
  async function get(store, id) {
    await ensure();
    return new Promise((resolve, reject) => {
      const req = db.transaction(store, 'readonly').objectStore(store).get(id);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
  }
  async function put(store, item) {
    await ensure();
    return new Promise((resolve, reject) => {
      const req = db.transaction(store, 'readwrite').objectStore(store).put(item);
      req.onsuccess = () => resolve(item);
      req.onerror = () => reject(req.error);
    });
  }
  async function remove(store, id) {
    await ensure();
    return new Promise((resolve, reject) => {
      const req = db.transaction(store, 'readwrite').objectStore(store).delete(id);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  }
  async function clear(store) {
    await ensure();
    return new Promise((resolve, reject) => {
      const req = db.transaction(store, 'readwrite').objectStore(store).clear();
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  }
  async function exportAll() {
    const data = {};
    for (const store of STORES) data[store] = await getAll(store);
    data.exportedAt = new Date().toISOString();
    data.version = 2;
    return data;
  }
  async function importAll(data) {
    for (const store of STORES) {
      await clear(store);
      for (const item of (data[store] || [])) await put(store, item);
    }
  }
  return { open, getAll, get, put, remove, exportAll, importAll };
})();
