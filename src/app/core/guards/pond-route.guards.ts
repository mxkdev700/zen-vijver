import { inject } from '@angular/core';
import { CanMatchFn, UrlSegment } from '@angular/router';
import { PondConceptsService } from '../../features/ponds/pond-concepts/pond-concepts.service';

function pondIdFromSegments(segments: UrlSegment[]): string {
  if (segments.length >= 2 && segments[0].path === 'ponds') {
    return segments[1].path;
  }

  return segments[0]?.path ?? '';
}

export const pondHasVariantsGuard: CanMatchFn = (_route, segments) => {
  return inject(PondConceptsService).hasVariants(pondIdFromSegments(segments));
};
