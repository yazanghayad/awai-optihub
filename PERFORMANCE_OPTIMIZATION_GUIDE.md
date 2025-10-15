# 🚀 Performance Optimization Guide

## Current Performance Setup

### ✅ Already Optimized

1. **Next.js Configuration**
   - ✓ Bundle Analyzer: `@next/bundle-analyzer` installed
   - ✓ Compression enabled in production
   - ✓ Webpack memory optimizations
   - ✓ Package import optimization for heavy libraries
   - ✓ Asset caching (1 year for static files)
   - ✓ PWA with Service Worker (Serwist)

2. **React Optimizations**
   - ✓ React.memo() for component memoization
   - ✓ Dynamic imports with next/dynamic
   - ✓ Zustand with selectors for efficient state management
   - ✓ react-scan integration for performance monitoring

3. **Image Optimization**
   - ✓ WebP format images
   - ✓ Aggressive CDN caching headers
   - Note: Ensure using `next/image` for automatic optimization

## 🎯 Quick Wins

### 1. Monitor Bundle Size with Import Cost

**Status**: ✅ Extension Installed

**Usage**: Open any TypeScript/JavaScript file and look for size indicators next to imports:
- 🟢 Green (< 100KB): Good
- 🟡 Yellow (100-500KB): Consider code splitting
- 🔴 Red (> 500KB): Optimize or lazy load

**Example files to check**:
```bash
src/app/[variants]/layout.tsx
src/features/DevPanel/features/FloatPanel.tsx
src/components/MaxTokenSlider.tsx
```

### 2. Analyze Bundle with Million Lint

**Status**: ✅ Extension Installed

**Action**: 
1. Open Problems panel: `Ctrl+Shift+M` (or `Cmd+Shift+M` on Mac)
2. Look for warnings about:
   - Unnecessary re-renders
   - Heavy components
   - Missing memoization

### 3. Use Bundle Analyzer

**Status**: ⏳ Running

**Command**: 
```bash
npm run build:analyze
```

**What to look for**:
- Large dependencies (> 500KB)
- Duplicate packages
- Unused code that can be removed

## 📊 Performance Monitoring

### Extensions Active:
1. **Import Cost** - Shows package sizes inline
2. **Million Lint** - Identifies React performance issues
3. **learn-images** - Image compression
4. **MinifyAll** - Minify CSS/JS files

### Built-in Tools:
- **Vercel Speed Insights** - Real user monitoring
- **React Scan** - Development performance monitoring
- **Next.js Bundle Analyzer** - Visual bundle breakdown

## 🔧 Optimization Techniques

### 1. Component Optimization

✅ **Already Using:**
```tsx
// Good: Using memo to prevent re-renders
const Component = memo<Props>(({ data }) => {
  return <div>{data}</div>;
});
```

✅ **Consider Adding:**
```tsx
// Add useCallback for event handlers
const handleClick = useCallback(() => {
  // handler logic
}, [dependencies]);

// Add useMemo for expensive calculations
const expensiveValue = useMemo(() => {
  return heavyComputation(data);
}, [data]);
```

### 2. Code Splitting

✅ **Already Using:**
```tsx
// Dynamic imports with loading state
const Component = dynamic(() => import('./Component'), {
  loading: () => <Loading />,
  ssr: false
});
```

### 3. Image Optimization

**Current**: WebP format ✅
**Recommendation**: Ensure all images use `next/image`

```tsx
// Instead of:
<img src="/images/banner.webp" alt="Banner" />

// Use:
import Image from 'next/image';
<Image src="/images/banner.webp" alt="Banner" width={800} height={400} />
```

### 4. State Management

✅ **Using Zustand with Selectors** (Best Practice)

```tsx
// Good: Using selectors to prevent unnecessary re-renders
const data = useStore(selectors.specificData);

// Avoid: Selecting entire store
const store = useStore(); // ❌ Re-renders on any state change
```

## 🎨 Image Optimization

### Current Images in /public/images:
```
banner_market_modal.webp (compress further)
screenshot_background.webp (compress further)
theme_*.webp files (already optimized)
chatmode_*.webp files (already optimized)
```

### How to Compress:
1. Right-click image file in VS Code
2. Select "Compress Image"
3. Choose compression level

## 📈 Performance Metrics to Track

### Core Web Vitals:
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Next.js Metrics:
- **TTFB (Time to First Byte)**: < 600ms
- **FCP (First Contentful Paint)**: < 1.8s

**Monitor with**: Vercel Speed Insights (already installed)

## 🔍 Debugging Performance Issues

### 1. Identify Slow Components
```bash
# Enable React Scan in development
DEBUG_REACT_SCAN=1 npm run dev
```

### 2. Check Bundle Size
```bash
npm run build:analyze
```

### 3. Lighthouse Audit
```bash
# In Chrome DevTools
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Run audit
```

## 🎯 Next Steps

1. ✅ Wait for bundle analyzer to complete
2. ⏳ Identify largest packages in bundle
3. ⏳ Compress images in /public/images
4. ⏳ Check Problems panel for Million Lint warnings
5. ⏳ Run Lighthouse audit on production build

## 📚 Resources

- [Next.js Performance](https://nextjs.org/docs/app/building-your-application/optimizing)
- [React Performance](https://react.dev/learn/render-and-commit)
- [Web Vitals](https://web.dev/vitals/)
- [Million Lint Docs](https://million.dev/docs/tools/lint)

## 🚨 Common Anti-Patterns to Avoid

### ❌ Don't:
```tsx
// Inline object creation causes re-renders
<Component style={{ margin: 10 }} />

// Anonymous functions cause re-renders
<button onClick={() => handleClick()} />

// Selecting entire store
const store = useStore();
```

### ✅ Do:
```tsx
// Move objects outside component or use useMemo
const style = { margin: 10 };
<Component style={style} />

// Use useCallback for handlers
const handleClick = useCallback(() => {}, []);
<button onClick={handleClick} />

// Use specific selectors
const data = useStore(selectors.data);
```

---

**Last Updated**: $(date)
**Bundle Analyzer Status**: Running...
**Extensions**: Import Cost ✅ | Million Lint ✅ | Image Optimizer ✅
