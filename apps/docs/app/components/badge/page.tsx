'use client';

import React from 'react';
import Badge from '@sigma-ui-kit/badge';
import ShuffleIcon from '@sigma-ui-kit/icons/ShuffleIcon';
import UserOutlinedIcon from '@sigma-ui-kit/icons/UserOutlinedIcon';

// Local types based on BadgeProps
type BadgeVariant = 'outlined' | 'filled';
type BadgeSize = 'smaller' | 'small' | 'standard' | 'big' | 'bigger';
type BadgeTone =
  | 'brand'
  | 'grey'
  | 'disable'
  | 'error'
  | 'warning'
  | 'success'
  | 'information'
  | 'discovery';

const variantList: BadgeVariant[] = ['outlined', 'filled'];
const sizeList: BadgeSize[] = ['smaller', 'small', 'standard', 'big', 'bigger'];
const toneList: BadgeTone[] = [
  'brand',
  'grey',
  'disable',
  'error',
  'warning',
  'success',
  'information',
  'discovery',
];

const styles = {
  page: {
    maxWidth: 960,
    margin: '0 auto',
    padding: 32,
  } as React.CSSProperties,
  h1: {
    fontSize: 32,
    fontWeight: 800,
    marginBottom: 32,
  } as React.CSSProperties,
  section: {
    marginBottom: 32,
  } as React.CSSProperties,
  h2: {
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 16,
  } as React.CSSProperties,
  p: {
    color: '#4b5563',
    marginBottom: 24,
  } as React.CSSProperties,
  card: {
    border: '1px solid #e5e7eb',
    borderRadius: 8,
    overflow: 'hidden',
  } as React.CSSProperties,
  cardHeader: {
    padding: '8px 16px',
    background: '#f3f4f6',
    borderBottom: '1px solid #e5e7eb',
    fontSize: 14,
    fontWeight: 500,
  } as React.CSSProperties,
  cardBody: {
    padding: 24,
    background: '#f9fafb',
  } as React.CSSProperties,
  row: {
    display: 'flex',
    gap: 16,
    alignItems: 'center',
    flexWrap: 'wrap',
  } as React.CSSProperties,
  col: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 12,
  },
  subTitle: {
    marginBottom: 4,
    fontSize: 14,
    fontWeight: 500,
    color: '#111827',
  } as React.CSSProperties,
};

export default function BadgePage() {
  return (
    <div style={styles.page}>
      <h1 style={styles.h1}>Badge Component</h1>

      <div style={styles.section}>
        <h2 style={styles.h2}>Basic Usage</h2>
        <p style={styles.p}>Simple badges with default props.</p>

        <div style={styles.card}>
          <div style={styles.cardHeader}>Basic Usage</div>

          <div style={styles.cardBody}>
            <div style={styles.row}>
              <Badge label="Default" />
              <Badge variant="filled" label="Filled" />
              <Badge tone="success" label="Success" />
            </div>
          </div>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.h2}>Variants</h2>
        <p style={styles.p}>Outlined and filled variants.</p>
        <div style={styles.card}>
          <div style={styles.cardHeader}>Badge Variants</div>
          <div style={styles.cardBody}>
            <div style={styles.row}>
              {variantList.map(variant => (
                <Badge
                  key={variant}
                  variant={variant}
                  label={variant.charAt(0).toUpperCase() + variant.slice(1)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.h2}>Sizes</h2>
        <p style={styles.p}>All size options for badges.</p>
        <div style={styles.card}>
          <div style={styles.cardHeader}>Badge Sizes</div>
          <div style={styles.cardBody}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {variantList.map(variant => (
                <div key={variant}>
                  <div style={styles.subTitle}>
                    {variant.charAt(0).toUpperCase() + variant.slice(1)}
                  </div>
                  <div style={styles.row}>
                    {sizeList.map(size => (
                      <Badge
                        key={`${variant}-${size}`}
                        variant={variant}
                        size={size}
                        label={size.charAt(0).toUpperCase() + size.slice(1)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.h2}>Tones</h2>
        <p style={styles.p}>All color tones for badges.</p>
        <div style={styles.card}>
          <div style={styles.cardHeader}>Badge Tones</div>
          <div style={styles.cardBody}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {variantList.map(variant => (
                <div key={variant}>
                  <div style={styles.subTitle}>
                    {variant.charAt(0).toUpperCase() + variant.slice(1)}
                  </div>
                  <div style={styles.row}>
                    {toneList.map(tone => (
                      <Badge
                        key={`${variant}-${tone}`}
                        variant={variant}
                        tone={tone}
                        label={tone.charAt(0).toUpperCase() + tone.slice(1)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.h2}>Variant × Tone</h2>
        <p style={styles.p}>Full matrix of variant and tone combinations.</p>
        <div style={styles.card}>
          <div style={styles.cardHeader}>Badge Variant × Tone</div>
          <div style={styles.cardBody}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {variantList.map(variant => (
                <div key={variant}>
                  <div style={styles.subTitle}>
                    {variant.charAt(0).toUpperCase() + variant.slice(1)}
                  </div>
                  <div style={styles.row}>
                    {toneList.map(tone => (
                      <Badge
                        key={`${variant}-${tone}-matrix`}
                        variant={variant}
                        tone={tone}
                        label={`${variant} / ${tone}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.h2}>With Icons</h2>
        <p style={styles.p}>Badges with prefix and suffix icons.</p>
        <div style={styles.card}>
          <div style={styles.cardHeader}>Prefix & Suffix</div>
          <div style={styles.cardBody}>
            <div style={styles.row}>
              <Badge prefix={<ShuffleIcon />} label="Hot" />
              <Badge prefix={<ShuffleIcon />} label="Next" />
              <Badge prefix={<ShuffleIcon />} suffix={<ShuffleIcon />} label="Done" />
              <Badge prefix={<ShuffleIcon />} variant="filled" tone="warning" label="Warning" />
              <Badge
                prefix={<UserOutlinedIcon />}
                variant="outlined"
                tone="information"
                label="Info"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
