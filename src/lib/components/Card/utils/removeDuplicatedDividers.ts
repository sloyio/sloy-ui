import { CardBlock } from '..';

const deletedId = Symbol('deletedId');

export const removeDuplicatedDividers = (blocks: CardBlock[]): CardBlock[] =>
  blocks
    .map((item, i, arr) => {
      if (item.type === 'divider' && arr[i + 1]?.type === 'divider') {
        return { type: deletedId as unknown as 'divider' };
      }

      return item;
    })
    .filter((item) => item.type !== (deletedId as unknown as 'divider'));
