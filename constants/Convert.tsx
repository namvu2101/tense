import React from "react";

export const Convert = {
  shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  },
  dataRenderingChildren: ({ item }: any): JSX.Element | undefined => {
    if (!item) {
      return undefined;
    }

    if (!Array.isArray(item.children)) {
      return item.children;
    }

    return item.children.map((childItem: any) => {
      const ChildrenComponent = childItem.component;
      return (
        <ChildrenComponent key={childItem.id} {...childItem.config}>
          {Convert.dataRenderingChildren({ item: childItem.children })}
        </ChildrenComponent>
      );
    });
  },
};
