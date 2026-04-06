import React, { useState, useMemo } from 'react';
import { useStore } from '../store/useStore';
import { format, parseISO } from 'date-fns';
import { Search, Plus, Trash2, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function Transactions() {
  const { transactions, role, addTransaction, deleteTransaction } = useStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [showAddForm, setShowAddForm] = useState(false);

  // New Transaction State
  const [newTx, setNewTx] = useState({ date: format(new Date(), 'yyyy-MM-dd'), amount: '', category: '', type: 'expense', description: '' });

  const filteredTransactions = useMemo(() => {
    return transactions.filter(t => {
      const matchesSearch = t.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            t.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = filterType === 'all' || t.type === filterType;
      return matchesSearch && matchesType;
    }).sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [transactions, searchTerm, filterType]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newTx.amount || !newTx.category) return;
    addTransaction({ ...newTx, amount: Number(newTx.amount) });
    setShowAddForm(false);
    setNewTx({ date: format(new Date(), 'yyyy-MM-dd'), amount: '', category: '', type: 'expense', description: '' });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
      {/* Header & Controls */}
      <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-xl font-bold dark:text-white">Transactions</h2>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-none">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
            />
          </div>
          
          <select 
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
          >
            <option value="all">All Types</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          {role === 'admin' && (
            <button 
              onClick={() => setShowAddForm(!showAddForm)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
            >
              <Plus className="w-4 h-4" /> <span className="hidden sm:inline">Add New</span>
            </button>
          )}
        </div>
      </div>

      {/* Admin Add Form */}
      {role === 'admin' && showAddForm && (
        <div className="p-6 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-700">
          <form onSubmit={handleAdd} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            <input type="date" required value={newTx.date} onChange={e => setNewTx({...newTx, date: e.target.value})} className="px-3 py-2 border rounded-lg dark:bg-gray-900 dark:border-gray-700 dark:text-white" />
            <input type="text" required placeholder="Description" value={newTx.description} onChange={e => setNewTx({...newTx, description: e.target.value})} className="px-3 py-2 border rounded-lg dark:bg-gray-900 dark:border-gray-700 dark:text-white" />
            <input type="text" required placeholder="Category" value={newTx.category} onChange={e => setNewTx({...newTx, category: e.target.value})} className="px-3 py-2 border rounded-lg dark:bg-gray-900 dark:border-gray-700 dark:text-white" />
            <input type="number" required placeholder="Amount" value={newTx.amount} onChange={e => setNewTx({...newTx, amount: e.target.value})} className="px-3 py-2 border rounded-lg dark:bg-gray-900 dark:border-gray-700 dark:text-white" />
            <select value={newTx.type} onChange={e => setNewTx({...newTx, type: e.target.value})} className="px-3 py-2 border rounded-lg dark:bg-gray-900 dark:border-gray-700 dark:text-white">
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
            <button type="submit" className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium">Save</button>
          </form>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 text-sm">
              <th className="px-6 py-4 font-medium">Date</th>
              <th className="px-6 py-4 font-medium">Description</th>
              <th className="px-6 py-4 font-medium">Category</th>
              <th className="px-6 py-4 font-medium text-right">Amount</th>
              {role === 'admin' && <th className="px-6 py-4 font-medium text-center">Action</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {filteredTransactions.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-6 py-12 text-center text-gray-500 dark:text-gray-400">
                  No transactions found.
                </td>
              </tr>
            ) : (
              filteredTransactions.map((t) => (
                <tr key={t.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4 text-sm dark:text-gray-300">{format(parseISO(t.date), 'MMM dd, yyyy')}</td>
                  <td className="px-6 py-4 text-sm font-medium dark:text-white">{t.description}</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium">
                      {t.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className={`flex items-center justify-end gap-1 font-semibold ${t.type === 'income' ? 'text-green-600 dark:text-green-400' : 'text-gray-900 dark:text-white'}`}>
                      {t.type === 'income' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4 text-red-500" />}
                      ${Number(t.amount).toLocaleString()}
                    </div>
                  </td>
                  {role === 'admin' && (
                    <td className="px-6 py-4 text-center">
                      <button onClick={() => deleteTransaction(t.id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}