export const getUniversalPackingMaterials = (state) =>
  state?.universal?.packing_materials || {
    status: 'idle',
    isInLocalStage: false,
    key: 'packingMaterials',
    length: 0,
  };
