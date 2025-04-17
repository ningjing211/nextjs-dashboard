import '@/app/ui/orderMenu/orderMenu.css';
import Parallax from '@/app/orderMenu/parallax';
import YouTubeVideo from '@/app/components/YouTubeVideo';

export default function OrderMenu() {
    return (
        <main className="min-h-screen bg-gray-100" style={{paddingBottom: '20px'}}>
            <Parallax />
            
            {/* Video Section */}
            <div className="px-4 md:px-8 max-w-6xl mx-auto mb-6">
                <YouTubeVideo videoId="uHr--2TdMO4" />
            </div>

            {/* Milkshake Section */}
            <div className="px-4 md:px-8 max-w-6xl mx-auto mb-12">
                <div className="bg-gray-200 rounded-3xl p-6 relative overflow-hidden">
                    <div className="flex flex-col gap-2 mb-4">
                        <h3 className="text-3xl font-bold">Milkshake</h3>
                        <div className="flex items-center justify-end"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-6">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-lg font-medium">熟成哈密瓜</p>
                                    <p className="text-gray-600">Hami melon</p>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-2xl font-bold mr-2">$150</span>
                                    <span className="w-5 h-5 rounded-full bg-cyan-400 relative before:content-['ICE'] before:absolute before:text-sm before:font-medium before:text-gray-700 before:-top-6 before:right-0"></span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-lg font-medium">芒果住北國</p>
                                    <p className="text-gray-600">Mango</p>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-2xl font-bold mr-2">$150</span>
                                    <span className="w-5 h-5 rounded-full bg-cyan-400"></span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-lg font-medium">巧克力戀人</p>
                                    <p className="text-gray-600">Chocolate</p>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-2xl font-bold mr-2">$150</span>
                                    <span className="w-5 h-5 rounded-full bg-cyan-400 relative before:content-['ICE'] before:absolute before:text-sm before:font-medium before:text-gray-700 before:-top-6 before:right-0"></span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-lg font-medium">北國現摘草莓</p>
                                    <p className="text-gray-600">Strawberry</p>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-2xl font-bold mr-2">$150</span>
                                    <span className="w-5 h-5 rounded-full bg-cyan-400"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}