import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RoutesService {
  constructor(private router: Router) {}

  getAllRoutes(): string[] {
    const allPaths: string[] = [];

    const extractPaths = (routes: Route[], parentPath = '') => {
      for (const route of routes) {
        const path = route.path ? `${parentPath}/${route.path}`.replace(/\/+/g, '/') : parentPath;

        if (path) {
          allPaths.push(path);
        }

        if (route.children) {
          extractPaths(route.children, path);
        }
      }
    };

    extractPaths(this.router.config);
    return allPaths;
  }

  getAllRoutesWithData(excludedPaths: string[] = []): {
    path: string;
    data: { [key: string]: any };
  }[] {
    const result: { path: string; data: { [key: string]: any } }[] = [];

    const extractRoutes = (routes: Route[], parentPath = '') => {
      for (const route of routes) {
        const fullPath = route.path ? `${parentPath}/${route.path}`.replace(/\/+/g, '/') : parentPath;

        if (!excludedPaths.includes(fullPath)) {
          result.push({
            path: fullPath,
            data: route.data || {}
          });
        }

        if (route.children) {
          extractRoutes(route.children, fullPath);
        }
      }
    };

    extractRoutes(this.router.config);
    return result;
  }

  getAllRoutesWithStandardExclusions(): {
    path: string;
    data: { [key: string]: any };
  }[] {
    return this.getAllRoutesWithData([
      '/**',
      '/demo',
      '/login'
    ]);
  }
}
