import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/data/courses';
import { topicCategories } from '@/data/structure';
import OverallProgressBar from '@/components/OverallProgressBar';
import TopicProgressPill from '@/components/TopicProgressPill';

export const metadata: Metadata = {
  title: 'コース一覧 | ALL ACADEMY',
  description: '11言語を学ぼう。世界と繋がろう。英語・日本語・中国語・韓国語・ドイツ語・フランス語・イタリア語・アラビア語・ポルトガル語・古典中国語。',
};

const colorMap: Record<string, string> = {
  'topic-english': '#3B82F6',
  'topic-japanese': '#EF4444',
  'topic-chinese': '#DC2626',
  'topic-korean': '#F59E0B',
  'topic-german': '#10B981',
  'topic-french': '#8B5CF6',
  'topic-spanish': '#EC4899',
  'topic-italian': '#14B8A6',
  'topic-arabic': '#F97316',
  'topic-portuguese': '#06B6D4',
  'topic-classical-chinese': '#6366F1',
};

export default function CoursesPage() {
  const totalCourses = categories.length;
  const totalLessons = categories.reduce((a, cat) => a + cat.courses.reduce((b, c) => b + c.lessons.filter(l => !l.isComingSoon).length, 0), 0);

  return (
    <div className="max-w-xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-6">
        <div
          className="inline-block text-[10px] font-bold tracking-[4px] px-3 py-1 rounded mb-3"
          style={{ background: 'var(--mb-dark)', color: 'var(--mb-gold)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          COURSES
        </div>
        <h1 className="text-2xl" style={{ fontFamily: "'Dela Gothic One', sans-serif", color: 'var(--mb-dark)' }}>
          コース一覧
        </h1>
        <p className="text-sm mt-1" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          {topicCategories.length}言語 · {totalLessons}講義
        </p>
      </div>

      {/* Overall progress */}
      <OverallProgressBar />

      {/* Language grid */}
      <div className="mt-6 mb-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-4 rounded-full" style={{ background: 'var(--mb-gold)' }} />
          <span className="text-xs font-bold tracking-[2px]" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            言語を選ぶ
          </span>
        </div>

        <div className="space-y-3">
          {topicCategories.map(tc => {
            const color = colorMap[tc.id] || 'var(--mb-gold)';
            const topicCourses = categories.filter(c => c.topicCategoryId === tc.id);
            const hasContent = topicCourses.length > 0;
            const lessonCount = topicCourses.reduce((a, c) => a + c.courses.reduce((b, ch) => b + ch.lessons.filter(l => !l.isComingSoon).length, 0), 0);

            if (!hasContent) return null;

            return (
              <Link
                key={tc.id}
                href={`/categories/${tc.id}`}
                className="flex items-center gap-4 rounded-2xl border-2 overflow-hidden bg-white transition-all hover:-translate-y-0.5 active:translate-y-0"
                style={{ borderColor: 'var(--mb-dark)', boxShadow: `3px 3px 0 ${color}` }}
              >
                {/* Language icon */}
                <div
                  className="w-20 h-20 shrink-0 flex items-center justify-center text-4xl font-bold"
                  style={{ background: `${color}18` }}
                >
                  {tc.title.charAt(0).toUpperCase()}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0 py-3 pr-1">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span
                      className="text-sm font-bold"
                      style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                    >
                      {tc.title}
                    </span>
                  </div>
                  <p className="text-[11px] leading-relaxed line-clamp-1" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                    {tc.description}
                  </p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span
                      className="text-[9px] font-bold px-1.5 py-0.5 rounded-full"
                      style={{ background: `${color}20`, color: color, fontFamily: "'Zen Maru Gothic', sans-serif" }}
                    >
                      {topicCourses.length}コース
                    </span>
                    <span className="text-[9px]" style={{ color: 'rgba(26,26,46,0.35)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                      {lessonCount}講義
                    </span>
                  </div>
                  <TopicProgressPill topicCategoryId={tc.id} color={color} />
                </div>

                {/* Arrow */}
                <div className="pr-4 shrink-0">
                  <svg className="w-4 h-4" style={{ color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
