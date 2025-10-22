'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './components.module.css';

interface ComponentInfo {
  name: string;
  path: string;
  description: string;
  category: string;
  status: 'stable' | 'beta' | 'alpha' | 'deprecated';
  version: string;
  lastUpdated: string;
  dependencies: string[];
  examples: number;
}

// Mock data - trong thực tế sẽ lấy từ API hoặc file system
const components: ComponentInfo[] = [
  {
    name: 'Button',
    path: '/packages/components/button',
    description: 'A versatile button component with multiple variants and sizes',
    category: 'Form Controls',
    status: 'stable',
    version: '1.2.0',
    lastUpdated: '2024-01-15',
    dependencies: ['@sigma-ui-kit/theme'],
    examples: 8,
  },
  {
    name: 'Input',
    path: '/packages/components/input',
    description: 'Text input component with validation and styling options',
    category: 'Form Controls',
    status: 'stable',
    version: '1.1.5',
    lastUpdated: '2024-01-10',
    dependencies: ['@sigma-ui-kit/theme'],
    examples: 6,
  },
  {
    name: 'InputPassword',
    path: '/packages/blocks/input-password',
    description: 'Password input with show/hide toggle functionality',
    category: 'Form Controls',
    status: 'beta',
    version: '0.9.2',
    lastUpdated: '2024-01-12',
    dependencies: ['@sigma-ui-kit/input', '@sigma-ui-kit/theme'],
    examples: 4,
  },
  {
    name: 'HomeIcon',
    path: '/packages/icons/HomeIcon',
    description: 'Home icon component with customizable size and color',
    category: 'Icons',
    status: 'stable',
    version: '1.0.0',
    lastUpdated: '2024-01-08',
    dependencies: ['@sigma-ui-kit/theme'],
    examples: 3,
  },
  {
    name: 'XMarkIcon',
    path: '/packages/icons/XMarkIcon',
    description: 'Close/X mark icon for modals, alerts, and dismissible elements',
    category: 'Icons',
    status: 'stable',
    version: '1.0.0',
    lastUpdated: '2024-01-08',
    dependencies: ['@sigma-ui-kit/theme'],
    examples: 2,
  },
  {
    name: 'useBoolean',
    path: '/packages/hooks/use-boolean',
    description: 'React hook for managing boolean state with toggle functionality',
    category: 'Hooks',
    status: 'stable',
    version: '1.0.0',
    lastUpdated: '2024-01-05',
    dependencies: [],
    examples: 5,
  },
  {
    name: 'useControllableState',
    path: '/packages/hooks/use-controllable-state',
    description: 'Hook for creating controllable/uncontrollable state patterns',
    category: 'Hooks',
    status: 'stable',
    version: '1.0.0',
    lastUpdated: '2024-01-05',
    dependencies: [],
    examples: 4,
  },
  {
    name: 'useEventCallback',
    path: '/packages/hooks/use-event-callback',
    description: 'Optimized event callback hook that maintains referential equality',
    category: 'Hooks',
    status: 'stable',
    version: '1.0.0',
    lastUpdated: '2024-01-05',
    dependencies: [],
    examples: 3,
  },
  {
    name: 'useIsomorphicLayoutEffect',
    path: '/packages/hooks/use-isomorphic-layout-effect',
    description: 'Cross-platform layout effect hook for SSR compatibility',
    category: 'Hooks',
    status: 'stable',
    version: '1.0.0',
    lastUpdated: '2024-01-05',
    dependencies: [],
    examples: 2,
  },
  {
    name: 'useLatestRef',
    path: '/packages/hooks/use-latest-ref',
    description: 'Hook that always returns the latest value in a ref',
    category: 'Hooks',
    status: 'stable',
    version: '1.0.0',
    lastUpdated: '2024-01-05',
    dependencies: [],
    examples: 3,
  },
  {
    name: 'usePlatformDetect',
    path: '/packages/hooks/use-platform-detect',
    description: 'Hook for detecting the current platform (mobile, tablet, desktop)',
    category: 'Hooks',
    status: 'stable',
    version: '1.0.0',
    lastUpdated: '2024-01-05',
    dependencies: [],
    examples: 4,
  },
  {
    name: 'ThemeProvider',
    path: '/packages/theme',
    description: 'Advanced theme provider with multi-mode, device detection, and CSS-in-JS support',
    category: 'Theme',
    status: 'beta',
    version: '2.0.0-beta.1',
    lastUpdated: '2024-01-20',
    dependencies: ['fela', 'react-fela'],
    examples: 12,
  },
];

const categories = ['All', 'Form Controls', 'Icons', 'Hooks', 'Theme'];

const statusColors = {
  stable: '#10b981',
  beta: '#f59e0b',
  alpha: '#ef4444',
  deprecated: '#6b7280',
};

export default function ComponentsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'status' | 'lastUpdated'>('name');

  const filteredComponents = components
    .filter(component => {
      const matchesCategory = selectedCategory === 'All' || component.category === selectedCategory;
      const matchesSearch =
        component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        component.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'status': {
          const statusOrder = { stable: 0, beta: 1, alpha: 2, deprecated: 3 };
          return statusOrder[a.status] - statusOrder[b.status];
        }
        case 'lastUpdated':
          return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
        default:
          return 0;
      }
    });

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Components</h1>
        <p className={styles.description}>
          Browse and explore all available components in the Sigma UI Kit
        </p>
      </header>

      <div className={styles.controls}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search components..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>

        <div className={styles.filters}>
          <div className={styles.categoryFilter}>
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              className={styles.select}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.sortFilter}>
            <label htmlFor="sort">Sort by:</label>
            <select
              id="sort"
              value={sortBy}
              onChange={e => setSortBy(e.target.value as any)}
              className={styles.select}
            >
              <option value="name">Name</option>
              <option value="status">Status</option>
              <option value="lastUpdated">Last Updated</option>
            </select>
          </div>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statNumber}>{filteredComponents.length}</span>
          <span className={styles.statLabel}>Components</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNumber}>
            {components.filter(c => c.status === 'stable').length}
          </span>
          <span className={styles.statLabel}>Stable</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNumber}>
            {components.filter(c => c.status === 'beta').length}
          </span>
          <span className={styles.statLabel}>Beta</span>
        </div>
      </div>

      <div className={styles.componentsGrid}>
        {filteredComponents.map(component => (
          <div key={component.name} className={styles.componentCard}>
            <div className={styles.componentHeader}>
              <div className={styles.componentTitle}>
                <h3 className={styles.componentName}>{component.name}</h3>
                <span
                  className={styles.statusBadge}
                  style={{ backgroundColor: statusColors[component.status] }}
                >
                  {component.status}
                </span>
              </div>
              <div className={styles.componentMeta}>
                <span className={styles.version}>v{component.version}</span>
                <span className={styles.lastUpdated}>{component.lastUpdated}</span>
              </div>
            </div>

            <p className={styles.componentDescription}>{component.description}</p>

            <div className={styles.componentDetails}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Category:</span>
                <span className={styles.detailValue}>{component.category}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Examples:</span>
                <span className={styles.detailValue}>{component.examples}</span>
              </div>
              {component.dependencies.length > 0 && (
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Dependencies:</span>
                  <span className={styles.detailValue}>{component.dependencies.join(', ')}</span>
                </div>
              )}
            </div>

            <div className={styles.componentActions}>
              <Link
                href={`/components/${component.name.toLowerCase()}`}
                className={styles.viewButton}
              >
                View Details
              </Link>
              <Link href={component.path} className={styles.sourceButton}>
                View Source
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredComponents.length === 0 && (
        <div className={styles.emptyState}>
          <Image
            src="/file-text.svg"
            alt="No components found"
            width={64}
            height={64}
            className={styles.emptyIcon}
          />
          <h3 className={styles.emptyTitle}>No components found</h3>
          <p className={styles.emptyDescription}>Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
}
