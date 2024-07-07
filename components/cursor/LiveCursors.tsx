"use client";
import { BaseUserMeta, User } from "@liveblocks/client";
import React from "react";
import Cursor from "./Cursor";
import { COLORS } from "@/constants";
import { Presence } from "@/types/type";

const LiveCursors = ({
  others,
}: {
  others: readonly User<Presence, BaseUserMeta>[];
}) => {
  return others?.map(({ connectionId, presence }) => {
    if (!presence?.cursor) {
      return null;
    } else {
      return (
        <Cursor
          key={connectionId}
          color={COLORS[Number(connectionId % COLORS.length)]}
          x={presence?.cursor?.x!}
          y={presence?.cursor?.y!}
          message={presence?.message}
        />
      );
    }
  });
};

export default LiveCursors;
