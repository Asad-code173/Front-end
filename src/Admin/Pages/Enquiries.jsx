const Enquiries = () => {
  return (
      <>
          <div className='mt-6 mx-4'>
              <h1 className='text-2xl font-bold -ml-[26%] sm:-ml-[0%]'>Enquiries</h1>
          </div>
          <div className='-ml-[26%] sm:ml-4  mt-6 mx-4 bg-white border border-gray-300 rounded-lg shadow-md'>
              <table className='w-full divide-y divide-gray-200'>
                  <thead className='bg-gray-200'>
                      <tr>
                          <th className='py-3 px-2 text-left text-xs font-medium text-gray-700'>Name</th>
                          <th className='py-3 px-2 text-left text-xs font-medium text-gray-700'>Email</th>
                          <th className='py-3 px-2 text-left text-xs font-medium text-gray-700'>Contact No</th>
                          <th className='py-3 px-2 text-left text-xs font-medium text-gray-700'>Message</th>
                          <th className='py-3 px-2 text-left text-xs font-medium text-gray-700'>Status</th>
                      </tr>
                  </thead>
                  <tbody className='bg-white divide-y divide-gray-200'>
                      <tr className='hover:bg-gray-100'>
                          <td className='py-2 px-2 text-sm text-gray-700'>Asad Ali</td>
                          <td className='py-2 px-2 text-sm text-gray-700 truncate'>asadfarzand711@example.com</td>
                          <td className='py-2 px-2 text-sm text-gray-700'>+1234567890</td>
                          <td className='py-2 px-2 text-sm text-gray-700 truncate'>Interested in the new collection</td>
                          <td className='py-2 px-2 text-sm text-gray-700'>Pending</td>
                      </tr>
                      <tr className='hover:bg-gray-100'>
                          <td className='py-2 px-2 text-sm text-gray-700'>Sara Ali</td>
                          <td className='py-2 px-2 text-sm text-gray-700 truncate'>saraadam124asad@example.com</td>
                          <td className='py-2 px-2 text-sm text-gray-700'>+0987654321</td>
                          <td className='py-2 px-2 text-sm text-gray-700 truncate'>Looking for new arrivals</td>
                          <td className='py-2 px-2 text-sm text-gray-700'>Completed</td>
                      </tr>
                      <tr className='hover:bg-gray-100'>
                          <td className='py-2 px-2 text-sm text-gray-700'>John</td>
                          <td className='py-2 px-2 text-sm text-gray-700 truncate'>john@example.com</td>
                          <td className='py-2 px-2 text-sm text-gray-700'>+1122334455</td>
                          <td className='py-2 px-2 text-sm text-gray-700 truncate'>Need support for returns</td>
                          <td className='py-2 px-2 text-sm text-gray-700'>In Progress</td>
                      </tr>
                      <tr className='hover:bg-gray-100'>
                          <td className='py-2 px-2 text-sm text-gray-700'>Fatima</td>
                          <td className='py-2 px-2 text-sm text-gray-700 truncate'>fatima@example.com</td>
                          <td className='py-2 px-2 text-sm text-gray-700'>+6677889900</td>
                          <td className='py-2 px-2 text-sm text-gray-700 truncate'>Interested in discounts</td>
                          <td className='py-2 px-2 text-sm text-gray-700'>Pending</td>
                      </tr>
                      <tr className='hover:bg-gray-100'>
                          <td className='py-2 px-2 text-sm text-gray-700'>Ahmed</td>
                          <td className='py-2 px-2 text-sm text-gray-700 truncate'>ahmed@example.com</td>
                          <td className='py-2 px-2 text-sm text-gray-700'>+4455667788</td>
                          <td className='py-2 px-2 text-sm text-gray-700 truncate'>Wants to know shipping details</td>
                          <td className='py-2 px-2 text-sm text-gray-700'>Completed</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </>
  );
}

export default Enquiries;
