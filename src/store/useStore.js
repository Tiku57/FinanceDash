import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialTransactions = [
  { id: '1', date: '2024-03-01', amount: 5000, category: 'Salary', type: 'income', description: 'Monthly Salary' },
  { id: '2', date: '2024-03-02', amount: 1200, category: 'Housing', type: 'expense', description: 'Rent' },
  { id: '3', date: '2024-03-05', amount: 150, category: 'Food', type: 'expense', description: 'Groceries' },
  { id: '4', date: '2024-03-08', amount: 60, category: 'Transport', type: 'expense', description: 'Gas' },
  { id: '5', date: '2024-03-10', amount: 200, category: 'Entertainment', type: 'expense', description: 'Concert Tickets' },
  { id: '6', date: '2024-03-15', amount: 500, category: 'Freelance', type: 'income', description: 'Web Project' },
  { id: '7', date: '2024-03-18', amount: 80, category: 'Food', type: 'expense', description: 'Dinner out' },
];

export const useStore = create(
  persist(
    (set, get) => ({
      transactions: initialTransactions,
      role: 'viewer', // 'viewer' | 'admin'
      theme: 'light', // 'light' | 'dark'
      
      addTransaction: (transaction) => set((state) => ({
        transactions: [{ ...transaction, id: crypto.randomUUID() }, ...state.transactions]
      })),
      
      deleteTransaction: (id) => set((state) => ({
        transactions: state.transactions.filter(t => t.id !== id)
      })),
      
      setRole: (role) => set({ role }),
      
      toggleTheme: () => set((state) => {
        const newTheme = state.theme === 'light' ? 'dark' : 'light';
        if (newTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        return { theme: newTheme };
      }),

      // Derived state helpers
      getSummary: () => {
        const { transactions } = get();
        const income = transactions.filter(t => t.type === 'income').reduce((acc, curr) => acc + Number(curr.amount), 0);
        const expenses = transactions.filter(t => t.type === 'expense').reduce((acc, curr) => acc + Number(curr.amount), 0);
        return { income, expenses, balance: income - expenses };
      }
    }),
    {
      name: 'finance-dashboard-storage',
      onRehydrateStorage: () => (state) => {
        if (state?.theme === 'dark') {
          document.documentElement.classList.add('dark');
        }
      },
    }
  )
);