import { describe, it, expect } from "vitest";
import { getUniversalPackingMaterials } from "./getUniversalPackingMaterials";

describe('getUniversalPackingMaterials() selector set of tests', () => {

  it('Should [return default] object on empty state', () => {
    expect(getUniversalPackingMaterials({})).toEqual({
      status: 'idle',
      isInLocalStage: false,
      key: 'packingMaterials',
      length: 0
    });
  });

  it('Should [return default] object on empty state.universal', () => {
    expect(getUniversalPackingMaterials({universal: {}})).toEqual({
      status: 'idle',
      isInLocalStage: false,
      key: 'packingMaterials',
      length: 0
    });
  });

  it('Should [return any valid value] on state.universal.packing_materials', () => {
    expect(getUniversalPackingMaterials({universal: {packing_materials: {step: 1}}})).toEqual({step: 1});
    expect(getUniversalPackingMaterials({universal: {packing_materials: {step: '1'}}})).toEqual({step: '1'});
    expect(getUniversalPackingMaterials({universal: {packing_materials: 1}})).toEqual(1);
    expect(getUniversalPackingMaterials({universal: {packing_materials: '1'}})).toEqual('1');
    expect(getUniversalPackingMaterials({universal: {packing_materials: true}})).toEqual(true);
  });

});